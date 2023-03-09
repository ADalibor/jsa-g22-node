const getCalculator = async (req, res) => {
    try {
        let output = await parseTemplate('calculator_form', '');
        res.send(output)
        } catch(err){
            console.log(err);
            res.status(500).send('internal server error');
        }
};

const parseTemplate = async (template, data) => {
    return new Promise((succes, fail) => {
        fs.readFile(`${__dirname}/../views/${template}.html`, 'utf8', (err, content) => {
            if (err) {
                return fail(err);
            }
            content = content.replace('{{data}}', data);
            return succes(content);
        });
    });
};

module.exports = {
    getCalculator
}