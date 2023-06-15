# Use the official PHP image as the base image
FROM composer:latest
FROM php:8.1-fpm

# Set the working directory in the container
WORKDIR /var/www/html/backend-beautybook

# Install PHP extensions and other dependencies
RUN docker-php-ext-install pdo pdo_mysql
RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pdo_pgsql
#RUN apt-get update && apt-get install -y libpng-dev && docker-php-ext-install gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy the rest of the application code
COPY . .

# Set up Laravel environment variables
ENV APP_KEY=base64:6xXcWH5elYFL/QT5T7NiqdqcQHfStLqGH0Z3tcrTvvA=
ENV DB_CONNECTION=mysql
ENV DB_HOST=db
ENV DB_PORT=3306
ENV DB_DATABASE=beautybook_db
ENV DB_USERNAME=myadmin
ENV DB_PASSWORD=1234

# Generate the application key and run database migrations
#RUN php artisan migrate --force

# Expose the port for the web server
EXPOSE 8000

# Set the command to run when the container starts
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
