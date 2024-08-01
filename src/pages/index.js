import { useState, useEffect } from 'react';
import { db } from '../path/to/firebase-config';
import { TextField, Card, Grid, Typography } from '@mui/material';

const PantryItems = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const unsubscribe = db.collection('pantryItems')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                const tempItems = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(tempItems);
            });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <TextField
                label="Search Items"
                variant="outlined"
                fullWidth
                onChange={(e) => setFilter(e.target.value)}
                style={{ margin: '20px 0' }}
            />
            <Grid container spacing={2}>
                {items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card>
                            <Typography variant="h6" component="h2">
                                {item.name}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PantryItems;
