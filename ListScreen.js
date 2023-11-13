import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Button } from 'react-native';

const ListScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://172.21.196.65/index.php/song/list", {
      method: "GET", // You are making a GET request
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setSongs(json.songs))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>User: {item.user}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Artist: {item.artist}</Text>
      <Text>Rating: {item.rating}</Text>
      <Button title="Update" onPress={() => handleUpdate(item)} />
      <Button title="Delete" onPress={() => handleDelete(item.id)} />
    </View>
  );

  const handleUpdate = (item) => {
    // Implement your update logic here
    console.log('Update button clicked for:', item);
  };

  const handleDelete = (itemId) => {
    // Implement your delete logic here
    console.log('Delete button clicked for item ID:', itemId);
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={songs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
