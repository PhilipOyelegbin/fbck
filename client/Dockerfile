# Use official Node.js image
FROM node:18 AS builder

# Set the working directory
WORKDIR .

# environment variables
ENV VITE_API_URI={VITE_API_URI}
ENV VITE_SSP={VITE_SSP}
ENV VITE_HOST_URI={VITE_HOST_URI}
ENV VITE_SMTP_HOST={VITE_SMTP_HOST}
ENV VITE_SMTP_USER={VITE_SMTP_USER}
ENV VITE_SMTP_PASSWORD={VITE_SMTP_PASSWORD}
ENV VITE_SECRET_KEY={VITE_SECRET_KEY}
ENV SECRET_KEY={SECRET_KEY}
ENV SMTP_HOST={SMTP_HOST}
ENV SMTP_USER={SMTP_USER}
ENV SMTP_PASSWORD={SMTP_PASSWORD}
ENV SMTP_PORT={SMTP_PORT}

# Copy package.json first (to leverage Docker cache)
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the app’s files
COPY . .

# Build the frontend app
RUN npm run build

# Use a lightweight web server for production
FROM nginx:alpine AS runner

# Copy the built files from the builder stage
COPY --from=builder ./dist /usr/share/nginx/html

# Expose the port frontend serves the app on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


