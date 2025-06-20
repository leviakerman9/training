# Assignment 0

Shell Script Assignment


## Question 1

1.Write a shell script which will execute the following set of tasks:

a. Create a folder named ‘sample’  in your ‘home’ directory

b.Inside ‘sample’ folder, create a file called ‘sample.txt’

## commands

. sudo su - to take permision and switch user
```bash
sudo su
```
. cd - to change directory
```bash
cd /home
```
. mkdir - to create folder or directory
```bash
mkdir sample
```
. touch - to create files
```bash
touch sample.txt
```

## Question 2
Add the following content to the file: 

a. Hi! This is just a sample text file created using a shell script.

## commands
. vim - to enter the file 
```bash
vim sample.txt
```
. press i - to write in the file
```bash
Hi! This is just a sample text file created using a shell script.
```

b. Print the contents of the file. 
## commands
. cat - to print the content of file
```bash
cat sample.txt
```

c. Print the number of occurrences of letter ‘t’ in ‘sample.txt’
## command
. grep - used to find the lines containing letter t

. wc - used to count the lines
```bash
grep -o "t" sample.text | wc -l
```
. the (-o) option with grep is used to output each match on a new line, then wc -l counts the lines.

d. Change the owner's permissions to allow all the operations on the file. ( Read, Write, Execute )
## command
. chmod - to give permissions to group, other , user
```bash
chmod g-rwx sample.txt
chmod o-rxw sample.txt
chmod u-rxw sample.txt
```

## Question 3
a. Write a command to append following content in sample.txt file:

Hi! This is just another sample text added to the file.
## command
. tee - to append text in file
```bash
tee -a sample.txt <<EOF 
"text"
EOF
```

b. Change the group permissions to allow only read operation.
## command
. chmod - to change the permissions
```bash
chmod a=r sample.txt
```

c. Change all users permission to deny any sort of access to ‘sample.txt’
## command
```bash
chmod ugo-rwx sample.txt
```

d. Write a command to create a file named sample2.txt with content similar to that of sample.txt
## command
. cp - to copy content of file to another new file
``` bash
cp sample.txt sample2.txt
```

e. Add some random 1000 lines in the sample.txt file.
## command
. tee - to add lines one or mutliple lines in file
```bash
tee -a sample.txt
```

f. Write a command to print the top 50 lines of the file
## command
. head - to print first n lines of file
```bash
head -50 sample.txt
```

g. Write a command to print the bottom 50 lines of the file
## command
. tail - to print last n lines of file
```bash
tail -50 sample.txt
```

h. Add 5 files in the same folder named: prog1.txt, prog2.txt, program.txt, code.txt, info.txt
## command
. touch - to add file in the folder
```bash
touch prog1.txt
touch prog2.txt
touch program.txt
touch code.txt
touch info.txt
```
i. Write the command to list files which have “prog” in its name
## command
. ls - to list file.

. grep - to find the file which have prog in common

```bash
ls | grep prog
```

## Question 4

1. What is the difference between the source and sh commands?
ans. 
## source command
. Runs the script in the current shell.

. Any changes made by the script (like setting environment variables or changing directories) affect the current shell session.

. Commonly used for scripts that set environment variables (like source ~/.bashrc and ~/.profile).

## sh command
. Runs the script in a new (sub)shell.

. Changes made inside the script do not affect the current shell.

. Useful when you just want to run a script without altering your current environment.



2. Create two files “a.txt” and “b.txt”. Write a command to get the difference between the contents in two files.

. create two file a.txt and b.txt
```bash
echo "hellow world" > a.txt
echo "hello" > b.txt
```
. diff - using diff command to find diff of two txt files
```bash
diff a.txt b.txt
```

. output
```bash
1c1
< hello world
---
> h
```
3. What is the difference between ls and lsof?
ans. ls - list folder or directory content

. dosent show opened files and who is using them

lsof - list open file

. Shows currently open files and the processes that opened them.

4. Create directories ./hello/world (World dir is inside hello dir) using mkdir command where neither hello or world exists. It should be a single command without the use of &&. 

```bash
mkdir -p ./hello/world
```
5. How can you permanently set an environment variable using a bash terminal?
ans. open appropriate folder
```bash
vim ~/.bashrc
vim ~/.profile
```

. add your environment variable
```bash
export NEWVAR="hello"
```
. save changes

.apply changes immediately
```bash
source ~/.bashrc
```

6. You have some process running on a port in your system. How can you view and then kill the process from the terminal?

. use top or htop to find process id
```bash
top
htop
```
. then use command kill to terminate or kill process using pid
```bash
kill [pid]
```