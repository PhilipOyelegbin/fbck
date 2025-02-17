# Use official Node.js image
FROM node:18 AS builder

# Set the working directory
WORKDIR .

# Copy package.json first (to leverage Docker cache)
COPY package.json .

# Copy the rest of the app’s files
COPY . .

# Install dependencies
RUN npm install

# Create the primsa schema and migration
RUN npx prisma generate
RUN npx prisma migrate deploy

# Create entrypoint script
# RUN echo "#!/bin/sh\nnpx prisma db seed && npm start" > /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# Expose the port express serves the api on
EXPOSE 4001

# Run the entrypoint script
#CMD ["/entrypoint.sh"]
CMD ["npm", "start"]
