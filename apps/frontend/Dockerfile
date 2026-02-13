# Build the docker image with `npx nx docker:build frontend`.
# Tip: Modify "docker:build" options in project.json to change docker build args.
#
# Run the container with `nx docker:run frontend -p 4200:4200`.
#
FROM nginx:alpine

COPY dist/browser /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
