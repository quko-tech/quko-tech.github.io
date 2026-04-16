function loadFiles(){
    fetch('/api/files')
    .then(response=>response.json())
    .then(files=>{
    const filteredFiles=files.filter(file=>file.name!=='config.cfg');
    displayFiles(filteredFiles);
    fetch('/api/storage').then(response=>response.json())
    .then(storageData=>{updateStorageInfo(storageData);})
    .catch(error=>{console.error('Error fetching storage info:',error);});
    })
    .catch(error=>{showMessage('Error loading files: '+error.message,false);});
}
    
function displayFiles(files){
    const fileList=document.getElementById('fileList');
    if(files.length===0){
    fileList.innerHTML='<tr><td colspan="3">No files found</td></tr>';
    return;
    }
    
    // Sort files alphabetically by name
    const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
    
    let html='';
    sortedFiles.forEach(file=>{
    html+=`<tr>`;
    html+=`<td>${file.name}</td>`;
    html+=`<td>${formatSize(file.size)}</td>`;
    html+=`<td>`;
    html+=`<a href='/api/files/download?filename=${encodeURIComponent(file.name)}' class='button download'>Download</a>`;
    html+=`<button type="button" onclick='deleteFile("${file.name}")' class='button delete'>Delete</button>`;
    html+=`</td>`;
    html+=`</tr>`;
    });
    fileList.innerHTML=html;
}

function updateStorageInfo(data){
    document.getElementById('usedSpace').textContent=formatSizeWithUnit(data.usedBytes);
    document.getElementById('totalSpace').textContent=formatSizeWithUnit(data.totalBytes);
    document.getElementById('freeSpace').textContent=formatSizeWithUnit(data.freeBytes);
    document.getElementById('percentUsed').textContent=data.percentUsed+'%';
    document.getElementById('progressFill').style.width=data.percentUsed+'%';
}

function deleteFile(filename){
    if(!confirm(`Are you sure you want to delete ${filename}?`))return;
    fetch('/api/files/delete',{
    method:'POST',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:'filename='+encodeURIComponent(filename)
    })
    .then(response=>response.text())
    .then(result=>{
    showMessage(result,true);
    loadFiles();
    })
    .catch(error=>{
    showMessage(error.message,false);
    });
}

function showMessage(message,isSuccess){
    const messageArea=document.getElementById('messageArea');
    messageArea.innerHTML=`<div class='message ${isSuccess?'success':'error'}'>${message}</div>`;
    setTimeout(()=>{messageArea.innerHTML='';},5000);
}

loadFiles();