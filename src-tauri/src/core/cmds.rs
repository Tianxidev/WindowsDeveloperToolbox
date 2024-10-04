use tauri::{command, AppHandle, Manager};

#[command]
pub fn view_open_devtools(app: AppHandle) {
    let window = app.get_window("main").unwrap();
    window.open_devtools();
}
