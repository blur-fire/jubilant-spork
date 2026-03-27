
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SemuaTab from "./components/SemuaTab";
import Pph23Tab from "./components/Pph23Tab";
import Pph22Tab from "./components/Pph22Tab";
import VarianceTab from "./components/VarianceTab";


export default function PphPage() {
	return (
		<div className="flex flex-col gap-[30px]">
			<div className="space-y-8 rounded-2xl  p-6">
				<Tabs defaultValue="Semua" className="w-full">
					<TabsList className="w-full rounded-2xl bg-gray-200">
						<TabsTrigger
							value="Semua"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							Semua
						</TabsTrigger>
						<TabsTrigger
							value="pph23"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							pph23
						</TabsTrigger>
						<TabsTrigger
							value="pph22"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							pph22
						</TabsTrigger>
						<TabsTrigger
							value="variance"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							variance
						</TabsTrigger>
					</TabsList>

					<TabsContent value="Semua">
						<SemuaTab />
					</TabsContent>

					<TabsContent value="pph23">
						<Pph23Tab />
					</TabsContent>

					<TabsContent value="pph22">
						<Pph22Tab />
					</TabsContent>

					<TabsContent value="variance">
						<VarianceTab />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
