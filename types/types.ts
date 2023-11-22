export type Address = {
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
} | null;

export type Location = "virtual" | "physical" | "hybrid";

export type Status =
  | "upcoming"
  | "pending"
  | "ongoing"
  | "done"
  | "cancelled"
  | "rescheduled";

export type FileObject =
  | string
  | File
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | Buffer;

export type Message = {
  text: string;
  file?: {
    data: FileObject;
    type: string;
  };
};

export type Business = {
  id: string;
  name: string;
  emails: string[];
  phones: string[];
  description: string;
  owner_id: string;
  address: Address;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
} | null;

export type Profile = {
  id: string;
  avatar: string;
  occupation: string;
  phone: string;
  username: string;
  full_name: string;
  email: string;
  skills: string[];
  address: Address;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
} | null;

export type Event = {
  id: string;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
  title: string;
  description: string;
  info: {
    organizer?: string;
    sponsors?: string[];
    address?: Address;
  };
  posted_by: string;
  status: Status;
  community_id: string;
  location: Location;
} | null;

export type Chat = {
  id: string;
  room_id: string;
  sender_id: string;
  p_chat_id: string;
  ìs_reply: boolean;
  message: Message;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
} | null;

export type Room = {
  id: string;
  admin_id?: string;
  is_group?: boolean;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
} | null;

export type Task = {
  id: string;
  title: string;
  description: string;
  event_id: string;
  p_task_id: string;
  status: Status;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
} | null;

export type Comment = {
  id: string;
  comment_by: string;
  p_comment_id: string;
  business_id: string;
  comment: Message;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
} | null;

export type Community = {
  id: string;
  name: string;
  state: string;
  country: string;
  city: string;
  created_at: Date | string | number;
  updated_at?: Date | string | number | null;
} | null;
