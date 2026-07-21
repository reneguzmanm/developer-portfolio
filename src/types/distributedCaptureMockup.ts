export interface MockupWorker {
  id: string;
  name: string;
  count: number;
  pending: number;
}

export interface MockupWorkerGroup {
  id: string;
  title: string;
  workers: MockupWorker[];
}

export interface DistributedCaptureMockupData {
  line: string;
  readerStatus: string;
  workerGroups: MockupWorkerGroup[];
  events: string[];
  lastSynchronization: string;
  centralDatabaseStatus: string;
}