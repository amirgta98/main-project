import os
import json

def find_html_files(directory):
    html_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

# Example usage
directory = 'E:/work/main project'
html_files = find_html_files(directory)

# ذخیره کردن آرایه در یک فایل جاوا اسکریپت
with open('output.js', 'w') as f:
    f.write("const htmlFiles = ")
    f.write(json.dumps(html_files))  # تبدیل لیست پایتون به فرمت جاوا اسکریپت
    f.write(";")
