# Use official Node.js image
FROM node:18 AS builder

# Set the working directory
WORKDIR .

# environment variables
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV SEED_ADMIN_NAME={SEED_ADMIN_NAME}
ENV SEED_ADMIN_EMAIL={SEED_ADMIN_EMAIL}
ENV SEED_ADMIN_PASSWORD={SEED_ADMIN_PASSWORD}
ENV PORT={PORT}
ENV HOST_URI={HOST_URI}
ENV FRONTEND_URI={FRONTEND_URI}
ENV SECRET_KEY={SECRET_KEY}
ENV SMTP_HOST={SMTP_HOST}
ENV SMTP_USER={SMTP_USER}
ENV SMTP_PASSWORD={SMTP_PASSWORD}
ENV SMTP_PORT={SMTP_PORT}

# Copy package.json first (to leverage Docker cache)
COPY package.json .

# Copy the rest of the app’s files
COPY . .

# Install dependencies
RUN npm install

# Create the primsa schema and migration
RUN npx prisma generate
RUN npx prisma migrate deploy

# Expose the port express serves the api on
EXPOSE 4001

# Run the entrypoint script
CMD ["npm", "start"]
