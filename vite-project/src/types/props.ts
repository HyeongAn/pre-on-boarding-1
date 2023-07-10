export interface RouterProps {
  children: React.ReactNode;
}

export interface RouteProps {
  path: string;
  element: React.ReactNode;
}

export interface LinkProps {
  to: string;
  children: React.ReactNode;
}
