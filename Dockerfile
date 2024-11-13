# Use the official Nginx image as the base image for serving the application
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the manually generated dist folder to the Nginx image
COPY dist/pidevangular .

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 9191
EXPOSE 9191

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
