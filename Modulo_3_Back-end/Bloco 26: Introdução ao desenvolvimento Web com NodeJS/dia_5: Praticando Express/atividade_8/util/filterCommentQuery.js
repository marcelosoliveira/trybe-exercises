const users = require('../data/users.json');

const filterCommentQuery = (req, res) => {
    const { filter } = req.query;
    const comments = users.reduce((acc, { comments }) => [...acc, ...comments], []);

    if (filter && filter.length > 0) return res.status(200).send(
        comments.filter((comments) => comments.includes(filter))
    );

    return res.status(200).send(comments);
}

module.exports = filterCommentQuery;
