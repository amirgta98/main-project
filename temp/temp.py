import os
import json
import tkinter as tk
from tkinter import messagebox

def find_html_files(directory):
    html_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

def load_html_files():
    directory = 'E:/work/main project'  # مسیر پوشه خود را تنظیم کنید
    html_files = find_html_files(directory)
    with open('output.js', 'w') as f:
        f.write("const htmlFiles = ")
        f.write(json.dumps(html_files))
        f.write(";")
    messagebox.showinfo("Success", "HTML files updated successfully!")

# ایجاد رابط کاربری
root = tk.Tk()
root.title("HTML Files Loader")

load_button = tk.Button(root, text="Load HTML", command=load_html_files)
load_button.pack(pady=20)

root.mainloop()
