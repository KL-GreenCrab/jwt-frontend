# Sử dụng image Node.js 20 chính thức
FROM node:20-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json
COPY package.json package-lock.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Expose cổng mà ứng dụng React sẽ chạy
EXPOSE 3000

# Lệnh chạy ứng dụng React
CMD ["npm", "start"]
