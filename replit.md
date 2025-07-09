# Replit.md - Ply Network Crowdfunding Platform

## Overview
This is a full-stack crowdfunding platform built with React (frontend) and Express.js (backend). The application uses a modern tech stack including TypeScript, Tailwind CSS, shadcn/ui components, and Drizzle ORM with PostgreSQL database. It's designed to showcase a crowdfunding infrastructure platform called "Ply Network" with comprehensive landing page sections, contact forms, and API endpoints.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React SPA with TypeScript, using Vite for development and building
- **Backend**: Express.js server with TypeScript, providing REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **React Components**: Modular component structure with reusable UI components
- **Component Library**: shadcn/ui components for consistent design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations
- **Icons**: Lucide React icons and React Icons for brand icons

### Backend Architecture
- **Express.js Server**: RESTful API with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage Interface**: Abstracted storage interface with in-memory implementation
- **API Routes**: Contact form submission and retrieval endpoints
- **Development Setup**: Vite integration for development mode

### Database Schema
- **Contact Requests Table**: Stores contact form submissions with fields for name, email, company, message, request type, and timestamp
- **Schema Definition**: Located in `shared/schema.ts` with Zod validation schemas
- **Migration Support**: Drizzle Kit configured for database migrations

## Data Flow
1. **Contact Form Submission**: Users fill out contact forms on the frontend
2. **API Request**: Form data is validated and sent to `/api/contact` endpoint
3. **Server Processing**: Express server validates data using Zod schemas
4. **Database Storage**: Contact requests are stored using the storage interface
5. **Response**: Success/error responses are sent back to the client
6. **Toast Notifications**: Users receive feedback through toast notifications

## External Dependencies
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **UI Components**: Radix UI primitives for accessible components
- **Development Tools**: Vite for development server and building
- **Type Safety**: TypeScript throughout the entire stack
- **Validation**: Zod for runtime type checking and validation

## Deployment Strategy
- **Build Process**: Vite builds the frontend to `dist/public`, esbuild bundles the server
- **Production Server**: Express server serves static files and API routes
- **Environment Variables**: DATABASE_URL required for database connection
- **Database Migrations**: Drizzle Kit handles database schema changes
- **Static Assets**: Frontend assets served from the built directory

The application is designed to be easily deployable on platforms like Replit, with development and production configurations clearly separated. The storage layer is abstracted to allow for easy switching between in-memory storage (development) and database storage (production).