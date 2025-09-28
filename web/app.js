let port;
const logEl=document.getElementById('log');
function log(m){ logEl.textContent+=m+"\n"; logEl.scrollTop=logEl.scrollHeight; }

document.getElementById('connectBtn').addEventListener('click', async()=>{
  try{
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    log("포트 연결됨");
  }catch(e){ log("연결 실패: "+e); }
});

document.getElementById('flashBtn').addEventListener('click', async()=>{
  if(!port){ log("먼저 보드 연결"); return; }
  const file=document.getElementById('binFile').files[0];
  if(!file){ log("bin 선택 필요"); return; }
  const reader=new FileReader();
  reader.onload=async()=>{
    log("파일 로드: "+file.name+" ("+reader.result.byteLength+" bytes)");
    // 실제 플래싱 로직은 esptool-js 필요
  };
  reader.readAsArrayBuffer(file);
});
