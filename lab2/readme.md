# File System (FS Module)
FS Module directly communicate with Operating system rather than Browser the common operations on a file or a folders are 
 - Files = WriteFile , readFile , appendFile.
 - Folder = Mkdir/Md , rmdir/rm , readdir.
 - File Metadata = stat , lstat , rstart.
 - Watch =  watch , unwatch.
 - Stream = readStream() , Writestream().

 All functions are Promise so , it must be called with await keyword.

### appendFile()
 Adds new data to the end of an existing file without deleting its previous content. If the file doesn't exist, it creates one.

### writeFile()
Writes data to a file, replacing the existing content. If the file doesn't exist, it creates one.
 
 ### readFile()
 Reads the contents of a file asynchronously and returns the data. It does not modify the file.
