import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5002/api/activities")
      .then(response => setActivities(response.data));
  }, []);

  return (
    <>
      <Typography variant="h1">
        Funly
      </Typography>

      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
        ))}
      </List>
    </>

  )
}

export default App
