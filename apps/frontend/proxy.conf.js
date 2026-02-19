const target = process.env.CODESPACES
  ? `https://${process.env.CODESPACE_NAME}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}:3000`
  : 'localhost:3000';

const secure = process.env.CODESPACES ? true : false;

module.exports = {
  '/api': {
    target: target,
    secure: secure,
  },
};
