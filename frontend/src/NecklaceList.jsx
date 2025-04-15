import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { useNavigate } from "react-router-dom"

const NecklaceList = () => {
    const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      console.log("call");
      
      const res = await fetch("http://127.0.0.1:8000/api/necklaces/")
      const data = await res.json()
      setProducts(data)
      console.log("Fetched products nacklaces:", data);
      
    } catch (err) {
      console.error("Error fetching products:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  const handleProductClick = (category,id) => {
    navigate(`/${category}/${id}`);
  };
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[300px] rounded-2xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {products.map((item) => (
        <Card key={item._id} 
        onClick={() => handleProductClick(item.category,item._id)}
        className="rounded-2xl shadow-md hover:scale-[1.01] transition-transform duration-300">
          <CardHeader className="p-0">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-2xl object-cover w-full h-60"
            />
          </CardHeader>
          <CardContent className="space-y-2 p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
              <Badge variant="outline">{item.category}</Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
            <Separator />
            <div className="flex justify-between items-center">
              <div className="flex gap-1 text-sm items-center">
                <Star className="w-4 h-4 text-yellow-500" />
                {item.rating} ({item.reviews})
              </div>
              <div className="text-right">
                <span className="text-base font-semibold text-green-600">₹{item.price}</span>
                <br />
                <span className="line-through text-xs text-muted-foreground">
                  ₹{item["original Price"]}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default NecklaceList
