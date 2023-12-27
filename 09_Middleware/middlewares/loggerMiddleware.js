const loggerMiddleware = (req, res, next) => {
    const start = Date.now();

    // Log request details
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);

    // Log request body (if it exists)
    if (req.body && Object.keys(req.body).length > 0) {
        console.log('Request Body:', req.body);
    }

    // Capture response details after the response is sent
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url} - ${res.statusCode} (${duration} ms)`);

        // Log response body (if it exists)
        const responseBody = res.get('Content-Type') === 'application/json' ? JSON.parse(res._getData()) : res._getData();
        console.log('Response Body:', responseBody);
    });

    next();
}

export default loggerMiddleware