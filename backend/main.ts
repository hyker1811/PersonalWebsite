import express from 'express';
import path from 'path';

const port = process.env.PORT || 8080;

express().get('/', (req: express.Request, res: express.Response) => {
	res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
})
.listen(port, () => console.log(`App listening on port ${port}`));
