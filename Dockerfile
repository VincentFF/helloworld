# 阶段1: 构建阶段
FROM node:22-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package.json yarn.lock ./

# 安装所有依赖（包括 devDependencies）
RUN yarn install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
RUN yarn build

# 阶段2: 生产阶段
FROM node:22-alpine AS production

WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production

# 复制依赖文件
COPY package.json yarn.lock ./

# 只安装生产依赖
RUN yarn install --frozen-lockfile --production && yarn cache clean

# 从构建阶段复制编译后的代码
COPY --from=builder /app/dist ./dist

# 暴露端口（NestJS 默认端口为 3000）
EXPOSE 3000

# 启动应用
CMD ["node", "dist/main"]
