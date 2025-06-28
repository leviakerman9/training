//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.28;

contract Todolist {

    address public owner;

    enum Status { NotStarted, InProgress, Completed }

    struct Task {
        uint256 id;
        string content;
        Status status;
        address assignee;
    }

    mapping(uint256 => Task) public tasks;
    mapping(address => uint256[]) private assigneeToTasks;
    uint256 public taskcount;

    event TaskCreated(uint256 id, string content, Status status, address assignee);
    event TaskStatusUpdated(uint256 id, Status status);
    event TaskDeleted(uint256 id);
    event TaskUpdated(uint256 id, string content);
    event TaskAssigned(uint256 id, address assignee);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can do this");
        _;
    }

    modifier onlyAssigneeOrOwner(uint256 _taskid) {
        require(
            msg.sender == owner || msg.sender == tasks[_taskid].assignee,
            "Not authorized"
        );
        _;
    }

    function createTask(string memory _content, address _assignee) public onlyOwner {
        taskcount++;
        tasks[taskcount] = Task(taskcount, _content, Status.NotStarted, _assignee);
        assigneeToTasks[_assignee].push(taskcount);
        emit TaskCreated(taskcount, _content, Status.NotStarted, _assignee);
    }

    function assignTask(uint256 _taskid, address _assignee) public onlyOwner {
        require(_taskid > 0 && _taskid <= taskcount, "Invalid task id");
        tasks[_taskid].assignee = _assignee;
        assigneeToTasks[_assignee].push(_taskid);
        emit TaskAssigned(_taskid, _assignee);
    }

    function updateStatus(uint256 _taskid, Status _newStatus) public onlyAssigneeOrOwner(_taskid) {
        require(_taskid > 0 && _taskid <= taskcount, "Invalid task id");
        tasks[_taskid].status = _newStatus;
        emit TaskStatusUpdated(_taskid, _newStatus);
    }

    function updateTask(uint256 _taskid, string memory _newcontent) public onlyOwner {
        require(_taskid > 0 && _taskid <= taskcount, "Invalid task id");
        tasks[_taskid].content = _newcontent;
        emit TaskUpdated(_taskid, _newcontent);
    }

    function deleteTask(uint256 _taskid) public onlyOwner {
        require(_taskid > 0 && _taskid <= taskcount, "Invalid task id");
        delete tasks[_taskid];
        emit TaskDeleted(_taskid);
    }

    function getTask(uint256 _taskid) public view returns (
        string memory, Status, address
    ) {
        require(_taskid > 0 && _taskid <= taskcount, "Invalid task id");
        Task memory task = tasks[_taskid];
        return (task.content, task.status, task.assignee);
    }

    function getTasksByAssignee(address _assignee) public view returns (uint256[] memory) {
        return assigneeToTasks[_assignee];
    }

    function getCount() public view returns (uint256) {
        return taskcount;
    }
}