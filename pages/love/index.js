import { Card, Image, Text, Button, Divider } from "@mantine/core";
import { useState, useEffect } from "react";

const LovePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load saved favorites from localStorage
    const savedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    console.log("Retrieved product from localStorage:", savedProduct);

    if (savedProduct) {
      setFavorites([savedProduct]); // Initialize favorites with the saved product
    }
  }, []);

  // Handler to delete an individual favorite
  const handleDeleteFavorite = (itemCode) => {
    setFavorites(favorites.filter((fav) => fav.item_code !== itemCode));
    // Optionally remove the product from localStorage if it matches
    const savedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    if (savedProduct?.item_code === itemCode) {
      localStorage.removeItem("selectedProduct");
    }
  };

  // Handler to clear all favorites
  const handleClearAll = () => {
    setFavorites([]);
    localStorage.removeItem("selectedProduct"); // Clear localStorage
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Text size="xl" weight={700} align="center" mb={10}>
        Love
      </Text>
      <Divider w="full" mb={20} />
      <div className="flex justify-center mb-4">
        {favorites.length > 0 && (
          <Button variant="outline" color="red" onClick={handleClearAll}>
            Clear All
          </Button>
        )}
      </div>
      {favorites.length > 0 ? (
        <div className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((fav) => (
            <Card key={fav._id || fav.item_code} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={fav.img_url}
                  alt={fav.item_code}
                  height={200}
                />
              </Card.Section>
              <div className="flex-1">
                <Text weight={500} mt="md" size="lg">
                  Item Code: {fav.item_code}
                </Text>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button
                  variant="light"
                  color="red"
                  fullWidth
                  radius="md"
                  className="mt-auto"
                  onClick={() => handleDeleteFavorite(fav.item_code)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Text align="center" size="lg" color="dimmed">
          No favorites added yet.
        </Text>
      )}
    </div>
  );
};

export default LovePage;
