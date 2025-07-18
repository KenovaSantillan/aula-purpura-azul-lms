
export interface Activity {
  id: string;
  activity_number: string;
  name: string;
  development?: string;
  deliverable?: string;
  score?: number;
  due_date?: string;
  allow_late_submissions: boolean;
  extra_materials: string[];
  links: string[];
  group_id: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  unit: number; // Unidad académica (1, 2, o 3)
}

export interface CreateActivityData {
  name: string;
  development?: string;
  deliverable?: string;
  score?: number;
  due_date?: string;
  allow_late_submissions: boolean;
  extra_materials: string[];
  links: string[];
  group_id: string;
  unit: number; // Unidad académica (1, 2, o 3)
}
