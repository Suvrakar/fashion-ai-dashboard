import { Card, Image, Text, Button, Divider } from "@mantine/core";
import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineDownload,
  AiOutlineDelete,
} from "react-icons/ai"; // Importing icons

const FavoritesPage = ({ favorites: initialFavorites }) => {
  const [favorites, setFavorites] = useState(initialFavorites);

  // Handler to delete an individual favorite
  const handleDeleteFavorite = async (itemCode) => {
    try {
      const userId = "648d6abc1234567890abcdef";
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/fashion/user-favs/${userId}/${itemCode}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        throw new Error("Failed to delete favorite");
      }

      setFavorites(favorites.filter((fav) => fav.item_code !== itemCode));
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  // Handler to clear all favorites
  const handleClearAll = async () => {
    try {
      const userId = "648d6abc1234567890abcdef";
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/fashion/user-favs/${userId}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        throw new Error("Failed to clear all favorites");
      }

      setFavorites([]);
    } catch (error) {
      console.error("Error clearing all favorites:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Text size="xl" weight={700} align="center" mb={10}>
        Favorites
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
            <Card key={fav._id} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={fav.img_url} alt={fav.item_code} height={200} />
              </Card.Section>
              <div className="flex-1">
                <Text weight={500} mt="md" size="lg">
                  Item Code: {fav.item_code}
                </Text>
                <Text size="sm" color="dimmed">
                  Added on: {new Date(fav.createdAt).toLocaleDateString()}
                </Text>
              </div>
              <div className="flex space-x-2 mt-4">
                {/* View Icon */}
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  radius="md"
                  className="mt-auto flex items-center justify-center"
                >
                  <AiOutlineEye size={20} />
                </Button>
                {/* Delete Icon */}
                <Button
                  variant="light"
                  color="red"
                  fullWidth
                  radius="md"
                  className="mt-auto flex items-center justify-center"
                  onClick={() => handleDeleteFavorite(fav.item_code)}
                >
                  <AiOutlineDelete size={20} />
                </Button>
                {/* Download Icon */}
                <a
                  href={fav.img_url}
                  download={`Favorite-${fav.item_code}.jpg`}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    variant="light"
                    color="green"
                    fullWidth
                    radius="md"
                    className="mt-auto flex items-center justify-center"
                  >
                    <AiOutlineDownload size={20} />
                  </Button>
                </a>
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

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/fashion/user-favs`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch favorites");
    }
    const favorites = await res.json();
    return {
      props: {
        favorites,
      },
    };
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return {
      props: {
        favorites: [],
      },
    };
  }
}

export default FavoritesPage;
