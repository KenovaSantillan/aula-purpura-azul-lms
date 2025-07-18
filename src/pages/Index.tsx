
import React, { useState, Suspense, lazy } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import { UserNav } from '@/components/UserNav';
import { PageLoader } from '@/components/PageLoader';

const Dashboard = lazy(() => import('@/components/Dashboard'));
const GroupsManager = lazy(() => import('@/components/GroupsManager'));
const StudentManagement = lazy(() => import('@/components/sections/StudentManagement'));
const TaskManagement = lazy(() => import('@/components/sections/TaskManagement'));
const ActivityManagement = lazy(() => import('@/components/activities/ActivityManagement'));
const Announcements = lazy(() => import('@/components/sections/Announcements'));
const ProgressTracking = lazy(() => import('@/components/sections/ProgressTracking'));
const ThemeCustomizerSection = lazy(() => import('@/components/ThemeCustomizer').then(m => ({ default: m.ThemeCustomizer })));
const Library = lazy(() => import('@/components/resources/Library'));
const AdminUserManagement = lazy(() => import('@/components/sections/admin/UserManagement'));
const Legal = lazy(() => import('@/components/sections/Legal'));

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'groups':
        return <GroupsManager />;
      case 'students':
        return <StudentManagement />;
      case 'tasks':
        return <TaskManagement />;
      case 'activities':
        return <ActivityManagement />;
      case 'announcements':
        return <Announcements />;
      case 'progress':
        return <ProgressTracking />;
      case 'customization':
        return <ThemeCustomizerSection />;
      case 'library':
        return <Library />;
      case 'admin/users':
        return <AdminUserManagement />;
      case 'legal':
        return <Legal />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-card/80 backdrop-blur-sm p-4 flex items-center justify-between shadow-soft sticky top-0 z-50">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden h-9 w-9 bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft transition-all duration-200" />
              <SidebarTrigger className="hidden md:block hover:bg-accent/50 transition-all duration-200" />
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c25f0b68-5713-4917-bcfb-9b936b589f47.png" 
                    alt="Portal Kenova" 
                    className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded blur animate-pulse-soft opacity-50"></div>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground">Portal Kenova</p>
                  <p className="text-xs text-muted-foreground">Sistema de Gestión Educativa</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="glass" 
                size="icon" 
                onClick={() => alert('Asistente de IA próximamente')}
                className="group hover:animate-glow relative"
              >
                <Brain className="h-5 w-5 group-hover:animate-bounce-gentle" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse-soft"></span>
              </Button>
              <UserNav />
            </div>
          </header>
          
          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <Suspense fallback={<PageLoader />}>
              {renderContent()}
            </Suspense>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
