export type Status = 'active' | 'archived';
export type Tag = { id: string; user_id: string; name: string; created_at: string };
export type Collection = { id: string; user_id: string; name: string; description: string | null; created_at: string; updated_at: string };
export type Activity = { id: string; bookmark_id: string; user_id: string; activity_type: 'saved'|'opened'|'edited'|'archived'|'restored'|'tagged'|'moved'; created_at: string };
export type Reminder = { id: string; user_id: string; bookmark_id: string; remind_at: string; status: 'pending'|'completed'|'dismissed'; created_at: string; updated_at: string };
export type Bookmark = { id: string; user_id: string; url: string; title: string; domain: string; favicon_url: string | null; reason: string; description: string | null; collection_id: string | null; status: Status; saved_at: string; last_visited_at: string | null; created_at: string; updated_at: string; tags?: Tag[]; collections?: Collection | null };
export type Profile = { id: string; full_name: string | null; avatar_url: string | null; created_at: string; updated_at: string };
