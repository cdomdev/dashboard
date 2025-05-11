
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface PopoverProps {
    selectedproducts: string[];
    setSelectedProducts: (products: string[]) => void;
}

const products = [
    { id: crypto.randomUUID(), name: "Producto 1", price: 100 },
    { id: crypto.randomUUID(), name: "Producto 2", price: 200 },
    { id: crypto.randomUUID(), name: "Producto 3", price: 300 },
]

export function PopoverProducts({ selectedproducts, setSelectedProducts }: PopoverProps) {
    const handleChange = (id: string) => {
        if (selectedproducts.includes(id)) {
            setSelectedProducts(selectedproducts.filter((pid) => pid !== id));
        } else {
            setSelectedProducts([...selectedproducts, id]);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full bg-blue-400 hover:bg-blue-600 hover:text-white text-white dark:bg-blue-500 cursor-pointer">
                    Seleccionar productos para la oferta
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 flex flex-col">
                <h2 className="text-center font-semibold">Listado de productos</h2>
                <hr className="w-full mb-2" />
                <div className="flex flex-col gap-2">
                    {products.map((pro) => (
                        <div key={pro.id} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={pro.id}
                                checked={selectedproducts.includes(pro.id)}
                                onChange={() => handleChange(pro.id)}
                            />
                            <label htmlFor={pro.id} className="font-semibold">{pro.name}</label>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}
