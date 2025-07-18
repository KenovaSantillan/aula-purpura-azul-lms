
import React, { createContext, useContext } from 'react';
import { Group, Task, Announcement, StudentProgress, Team, TaskSubmission, Resource } from '@/types/lms';
import { Activity } from '@/types/activity';
import { GroupProvider, useGroups, GroupContextType } from './GroupContext';
import { TaskProvider, useTasks, TaskContextType } from './TaskContext';
import { AnnouncementProvider, useAnnouncements, AnnouncementContextType } from './AnnouncementContext';
import { TeamProvider, useTeams, TeamContextType } from './TeamContext';
import { ChatProvider, useChat, ChatContextType } from './ChatContext';
import { ResourceProvider, useLMSResources, ResourceContextType } from './ResourceContext';
import { ActivityProvider, useActivities, ActivityContextType } from './ActivityContext';

type LMSContextType = GroupContextType & TaskContextType & AnnouncementContextType & TeamContextType & ChatContextType & ResourceContextType & ActivityContextType;

const LMSContext = createContext<LMSContextType | undefined>(undefined);

const LMSProviderContent = ({ children }: { children: React.ReactNode }) => {
  const groupsContext = useGroups();
  const tasksContext = useTasks();
  const announcementsContext = useAnnouncements();
  const teamsContext = useTeams();
  const chatContext = useChat();
  const resourcesContext = useLMSResources();
  const activitiesContext = useActivities();

  const combinedContextValue: LMSContextType = {
    ...groupsContext,
    ...tasksContext,
    ...announcementsContext,
    ...teamsContext,
    ...chatContext,
    ...resourcesContext,
    ...activitiesContext,
  };

  return (
    <LMSContext.Provider value={combinedContextValue}>
      {children}
    </LMSContext.Provider>
  );
};

export function LMSProvider({ children }: { children: React.ReactNode }) {
  return (
    <GroupProvider>
      <TaskProvider>
        <AnnouncementProvider>
          <TeamProvider>
            <ChatProvider>
              <ResourceProvider>
                <ActivityProvider>
                  <LMSProviderContent>
                    {children}
                  </LMSProviderContent>
                </ActivityProvider>
              </ResourceProvider>
            </ChatProvider>
          </TeamProvider>
        </AnnouncementProvider>
      </TaskProvider>
    </GroupProvider>
  );
}

export function useLMS() {
  const context = useContext(LMSContext);
  if (context === undefined) {
    throw new Error('useLMS must be used within an LMSProvider');
  }
  return context;
}
