export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          activity_number: string
          allow_late_submissions: boolean | null
          created_at: string | null
          created_by: string
          deliverable: string | null
          development: string | null
          due_date: string | null
          extra_materials: Json | null
          group_id: string
          id: string
          links: Json | null
          name: string
          score: number | null
          unit: number | null
          updated_at: string | null
        }
        Insert: {
          activity_number: string
          allow_late_submissions?: boolean | null
          created_at?: string | null
          created_by: string
          deliverable?: string | null
          development?: string | null
          due_date?: string | null
          extra_materials?: Json | null
          group_id: string
          id?: string
          links?: Json | null
          name: string
          score?: number | null
          unit?: number | null
          updated_at?: string | null
        }
        Update: {
          activity_number?: string
          allow_late_submissions?: boolean | null
          created_at?: string | null
          created_by?: string
          deliverable?: string | null
          development?: string | null
          due_date?: string | null
          extra_materials?: Json | null
          group_id?: string
          id?: string
          links?: Json | null
          name?: string
          score?: number | null
          unit?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activities_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activities_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      announcements: {
        Row: {
          content: string
          created_at: string | null
          created_by: string
          group_id: string | null
          id: string
          priority: Database["public"]["Enums"]["announcement_priority"]
          title: string
        }
        Insert: {
          content: string
          created_at?: string | null
          created_by: string
          group_id?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["announcement_priority"]
          title: string
        }
        Update: {
          content?: string
          created_at?: string | null
          created_by?: string
          group_id?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["announcement_priority"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcements_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      group_chat_messages: {
        Row: {
          content: string
          created_at: string
          group_id: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          group_id: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          group_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_group"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      group_members: {
        Row: {
          group_id: string
          user_id: string
        }
        Insert: {
          group_id: string
          user_id: string
        }
        Update: {
          group_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          created_at: string | null
          grade: Database["public"]["Enums"]["grade"]
          id: string
          letter: Database["public"]["Enums"]["letter"]
          name: string
          shift: Database["public"]["Enums"]["shift"]
          specialty: Database["public"]["Enums"]["specialty"]
          status: Database["public"]["Enums"]["group_status"]
          teacher_id: string | null
          tutor_id: string | null
        }
        Insert: {
          created_at?: string | null
          grade: Database["public"]["Enums"]["grade"]
          id?: string
          letter: Database["public"]["Enums"]["letter"]
          name: string
          shift: Database["public"]["Enums"]["shift"]
          specialty: Database["public"]["Enums"]["specialty"]
          status?: Database["public"]["Enums"]["group_status"]
          teacher_id?: string | null
          tutor_id?: string | null
        }
        Update: {
          created_at?: string | null
          grade?: Database["public"]["Enums"]["grade"]
          id?: string
          letter?: Database["public"]["Enums"]["letter"]
          name?: string
          shift?: Database["public"]["Enums"]["shift"]
          specialty?: Database["public"]["Enums"]["specialty"]
          status?: Database["public"]["Enums"]["group_status"]
          teacher_id?: string | null
          tutor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_tutor_id_fkey"
            columns: ["tutor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role: Database["public"]["Enums"]["app_role"]
          status: Database["public"]["Enums"]["user_status"]
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role: Database["public"]["Enums"]["app_role"]
          status?: Database["public"]["Enums"]["user_status"]
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          status?: Database["public"]["Enums"]["user_status"]
          updated_at?: string | null
        }
        Relationships: []
      }
      resources: {
        Row: {
          content: string
          created_at: string
          description: string | null
          file_name: string | null
          file_type: string | null
          group_id: string | null
          id: string
          title: string
          type: Database["public"]["Enums"]["resource_type"]
          updated_at: string
          uploaded_by: string
        }
        Insert: {
          content: string
          created_at?: string
          description?: string | null
          file_name?: string | null
          file_type?: string | null
          group_id?: string | null
          id?: string
          title: string
          type: Database["public"]["Enums"]["resource_type"]
          updated_at?: string
          uploaded_by: string
        }
        Update: {
          content?: string
          created_at?: string
          description?: string | null
          file_name?: string | null
          file_type?: string | null
          group_id?: string | null
          id?: string
          title?: string
          type?: Database["public"]["Enums"]["resource_type"]
          updated_at?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "resources_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resources_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      task_assignees: {
        Row: {
          task_id: string
          user_id: string
        }
        Insert: {
          task_id: string
          user_id: string
        }
        Update: {
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_assignees_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_assignees_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      task_submissions: {
        Row: {
          attachments: Json | null
          content: string | null
          created_at: string | null
          id: string
          score_details: Json | null
          student_id: string
          submission_hash: string | null
          submitted_at: string
          task_id: string
          teacher_feedback: string | null
          team_id: string | null
          total_score: number | null
        }
        Insert: {
          attachments?: Json | null
          content?: string | null
          created_at?: string | null
          id?: string
          score_details?: Json | null
          student_id: string
          submission_hash?: string | null
          submitted_at?: string
          task_id: string
          teacher_feedback?: string | null
          team_id?: string | null
          total_score?: number | null
        }
        Update: {
          attachments?: Json | null
          content?: string | null
          created_at?: string | null
          id?: string
          score_details?: Json | null
          student_id?: string
          submission_hash?: string | null
          submitted_at?: string
          task_id?: string
          teacher_feedback?: string | null
          team_id?: string | null
          total_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "task_submissions_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_submissions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_submissions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          allow_late_submissions: boolean
          created_at: string | null
          created_by: string
          description: string | null
          due_date: string | null
          group_id: string
          id: string
          max_score: number | null
          rubric: string | null
          rubric_structured: Json | null
          status: Database["public"]["Enums"]["task_status"]
          title: string
          type: Database["public"]["Enums"]["task_type"]
        }
        Insert: {
          allow_late_submissions?: boolean
          created_at?: string | null
          created_by: string
          description?: string | null
          due_date?: string | null
          group_id: string
          id?: string
          max_score?: number | null
          rubric?: string | null
          rubric_structured?: Json | null
          status?: Database["public"]["Enums"]["task_status"]
          title: string
          type: Database["public"]["Enums"]["task_type"]
        }
        Update: {
          allow_late_submissions?: boolean
          created_at?: string | null
          created_by?: string
          description?: string | null
          due_date?: string | null
          group_id?: string
          id?: string
          max_score?: number | null
          rubric?: string | null
          rubric_structured?: Json | null
          status?: Database["public"]["Enums"]["task_status"]
          title?: string
          type?: Database["public"]["Enums"]["task_type"]
        }
        Relationships: [
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          team_id: string
          user_id: string
        }
        Insert: {
          team_id: string
          user_id: string
        }
        Update: {
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          color: string | null
          created_at: string | null
          group_id: string
          id: string
          name: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          group_id: string
          id?: string
          name: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          group_id?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "teams_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_next_activity_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      is_group_member: {
        Args: { _group_id: string; _user_id: string }
        Returns: boolean
      }
      is_group_teacher: {
        Args: { _group_id: string; _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      announcement_priority: "low" | "medium" | "high"
      app_role: "student" | "teacher" | "tutor" | "parent" | "admin"
      grade: "1o" | "2o" | "3o" | "4o" | "5o" | "6o"
      group_status: "active" | "archived"
      letter: "A" | "B" | "C" | "D" | "E"
      resource_type: "file" | "link"
      shift: "Matutino" | "Vespertino"
      specialty:
        | "Servicios de Hospedaje"
        | "Programación"
        | "Contabilidad"
        | "Construcción"
      task_status:
        | "pending"
        | "in-progress"
        | "completed"
        | "submitted"
        | "graded"
        | "plagiarized"
      task_type: "collective" | "group" | "individual"
      user_status: "pending" | "active" | "inactive"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      announcement_priority: ["low", "medium", "high"],
      app_role: ["student", "teacher", "tutor", "parent", "admin"],
      grade: ["1o", "2o", "3o", "4o", "5o", "6o"],
      group_status: ["active", "archived"],
      letter: ["A", "B", "C", "D", "E"],
      resource_type: ["file", "link"],
      shift: ["Matutino", "Vespertino"],
      specialty: [
        "Servicios de Hospedaje",
        "Programación",
        "Contabilidad",
        "Construcción",
      ],
      task_status: [
        "pending",
        "in-progress",
        "completed",
        "submitted",
        "graded",
        "plagiarized",
      ],
      task_type: ["collective", "group", "individual"],
      user_status: ["pending", "active", "inactive"],
    },
  },
} as const
