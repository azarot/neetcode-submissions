class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let c of s.split('')) {
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                const b = stack.pop();
                if (!((c === ')' && b === '(') || (c === ']' && b === '[') || (c === '}' && b === '{'))) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
