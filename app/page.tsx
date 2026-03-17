import LeftPanel from "@/components/layout/LeftPanel";
import RightPanel from "@/components/layout/RightPanel";

export default function Home() {
  return (
    <div className="flex h-screen">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
