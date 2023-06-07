# Use an official PHP image as the base
FROM php:7.4-apache

# Set the working directory in the container
WORKDIR /var/www/html

# Install PHP extensions and other dependencies
RUN docker-php-ext-install pdo pdo_mysql
RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pdo_pgsql

# Copy composer.json and composer.lock to the working directory
COPY composer.json composer.lock ./

# Install dependencies
RUN composer install --no-dev --no-scripts --no-progress --prefer-dist

# Copy the rest of the application code
COPY . .

# Set up Laravel environment variables
ENV APP_KEY=your_app_key
ENV DB_CONNECTION=pgsql
ENV DB_HOST=db
ENV DB_PORT=5432
ENV DB_DATABASE=your_database_name
ENV DB_USERNAME=your_database_username
ENV DB_PASSWORD=your_database_password

# Generate the application key and run database migrations
RUN php artisan key:generate
RUN php artisan migrate --force

# Set the document root for Apache
RUN sed -i -e 's/html/html\/public/g' /etc/apache2/sites-enabled/000-default.conf

# Enable Apache rewrite module
RUN a2enmod rewrite

# Set the command to run when the container starts
CMD ["apache2-foreground"]
