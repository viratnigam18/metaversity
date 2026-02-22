import os

# 👉 CHANGE THIS to your folder path
folder_path = r"C:\importanr folder\Club work\meta\metaversity\src\assets\team"

# Mapping: old filename -> new filename
rename_map = {
    "president .jpeg": "president.jpeg",
    "Operations manager.jpeg": "operations-manager.jpeg",
    "tech co lead.png": "tech-co-lead.png",
    "pr lead .png": "pr-lead.png",
    "pr co lead.jpg": "pr-co-lead.jpg",
    "panel 5.jpg": "panel-5.jpg",
    "panel 4.jpg": "panel-4.jpg",
    "panel 3.jpeg": "panel-3.jpeg",
    "panel 2.jpeg": "panel-2.jpeg",
    "panel 1.jpg": "panel-1.jpg",
    "media lead 2.jpg": "media-lead-2.jpg",
    "media lead.jpg": "media-lead.jpg",
    "media co lead 2.jpg": "media-co-lead-2.jpg",
    "media co lead.jpg": "media-co-lead.jpg",
    "event lead.jpg": "event-lead.jpg",
    "event co lead 2.jpeg": "event-co-lead-2.jpeg",
    "event co lead 1.jpeg": "event-co-lead-1.jpeg",
    "design co lead.jpg": "design-co-lead.jpg",
    "content lead.jpg": "content-lead.jpg",
    "content co lead .jpeg": "content-co-lead.jpeg",
}

for old_name, new_name in rename_map.items():
    old_path = os.path.join(folder_path, old_name)
    new_path = os.path.join(folder_path, new_name)

    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"✅ Renamed: {old_name} → {new_name}")
    else:
        print(f"❌ Not found: {old_name}")

print("\nDone 👍")