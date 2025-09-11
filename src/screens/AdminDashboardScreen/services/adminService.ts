import { DashboardItem } from "../models/DashboardItem";

export async function getDashboardItems(): Promise<DashboardItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", title: "Usuários ativos", description: "100 usuários online" },
        { id: "2", title: "Novas consultas", description: "5 consultas agendadas hoje" }
      ]);
    }, 1000);
  });
}
