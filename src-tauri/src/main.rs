// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod core;
mod serial;

use core::cmds;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            cmds::view_open_devtools,
            cmds::view_open_system_device_manager,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
