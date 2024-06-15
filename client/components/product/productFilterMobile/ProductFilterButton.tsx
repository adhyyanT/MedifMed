import { Button } from "@/components/ui/button";
import { CaretSortIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import styles from "./productFilterButton.module.css";

const ProductFilterButton = () => {
	return (
		<>
			<div className="flex w-full justify-center">
				<Button className={`${styles.button} h-11 text-lg ${styles.left}`}>
					<CaretSortIcon /> Sort
				</Button>
				<Button className={`${styles.button} h-11 text-lg ${styles.right}`}>
					<MixerHorizontalIcon /> Filter
				</Button>
			</div>
		</>
	);
};

export default ProductFilterButton;
