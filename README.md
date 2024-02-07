# AmadeusFlightSearchApp
Flight search application

VsCode Json Server used in this app.

npm install -g json-server

json-server --watch db.json --port 3001

if there s an error about policies ;

open powershell in administrator mode and type these 
 
1 - Get-ExecutionPolicy

--if this command shows Restricted as a response then type this 

Set-ExecutionPolicy RemoteSigned

And type "A" to accept all. 

Now try json-server --watch db.json --port 3001
