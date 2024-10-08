use std::process::Command;
use tauri::{command, AppHandle, Manager};

#[command]
pub fn view_open_devtools(app: AppHandle) {
    let window = app.get_window("main").unwrap();
    window.open_devtools();
}

#[command]
pub fn view_open_system_device_manager(_app: AppHandle) {
    let result = Command::new("cmd")
    result.args(&["/C", "devmgmt.msc"]).spawn();

    match result {
        Ok(_) => println!("设备管理器已启动"),
        Err(e) => println!("无法启动设备管理器: {}", e),
    }
}
