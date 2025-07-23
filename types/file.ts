export interface FileItem {
  id: string;
  name: string;
  type: "image" | "document" | "video" | "other";
  size: string;
  uploadDate: string;
  thumbnail?: string;
  extension: string;
}

export interface FilterOption {
  label: string;
  value: string;
  color: string;
  icon: string;
  count: number;
}
