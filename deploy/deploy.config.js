module.exports = {
  deploy: {
    production: {
      key: "./deploy/ubuntu",
      user: "ubuntu",
      host: ["library.dsctiet.tech"],
      ref: "origin/master",
      repo:
        "https://github.com/developer-student-club-thapar/officialWebsite.git",
      path: "/home/ubuntu/officialWebsite-production",
      "post-setup":
        "sudo pip3.7 install poetry && poetry install && python3.7 manage.py migrate 0.0.0.0:8000",
      "post-deploy":
        "source env/bin/activate && gunicorn officialWebsite.config.wsgi --bind 0.0.0.0:8000 -D"
    }
  }
};
