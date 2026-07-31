# 🚀 Amazon Q Developer CI/CD Auto-Fix Demo Project

This is a standalone, lightweight demo project created to test **Amazon Q AI failure analysis, root-cause diagnosis, and automated PR code fixing** in isolation.

---

## 📁 Project Structure

```
amazon-q-ci-demo/
├── src/
│   ├── discount.ts          ◄── Real feature code (contains intentional bug: `price - 10`)
│   └── discount.spec.ts     ◄── Test file (asserts 20% discount on $100 = 80)
├── buildspec.yml            ◄── AWS CodeBuild configuration file
├── jest.config.js           ◄── Jest test runner configuration
├── package.json             ◄── Project dependencies & npm scripts
└── README.md                ◄── This step-by-step testing guide
```

---

## 🧪 Step 1: Run Test Locally & See Intentional Failure

1. Open your terminal in this directory:
   ```bash
   cd amazon-q-ci-demo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Jest tests:
   ```bash
   npm test
   ```

### 🔴 What Happens:
Jest will run and output a clean failure trace:
```text
  ● Promotional Discount Engine › should calculate 20% discount on $100 correctly

    expect(received).toBe(expected) // Object.is equality

    Expected: 80
    Received: 90

      11 |     const result = calculateDiscount(100, 20);
    > 12 |     expect(result).toBe(80);
         |                    ^
```

---

## ☁️ Step 2: Test Live with Amazon Q Developer (2 Options)

### Option A: GitHub Pull Request Integration (Recommended & Easiest)
1. Push this folder `amazon-q-ci-demo` to a test GitHub repository.
2. Install the **Amazon Q Developer App** from the [GitHub Marketplace](https://github.com/marketplace/amazon-q-developer).
3. Open a Pull Request (PR) on your repository.
4. When the test check fails, Amazon Q Developer will analyze the test log and post an inline PR review comment:

> 🤖 **Amazon Q Suggestion**:
> *"Test failed on line 12 of `discount.spec.ts`. The implementation in `discount.ts` subtracts flat $10 instead of calculating percentage.*
> 
> ```diff
> - return price - 10;
> + return price - (price * discountPercent / 100);
> ```
> 
> **[ Commit Suggestion ]**

5. Click **"Commit Suggestion"** in GitHub. The PR updates, tests re-run, and exit `0`! 🎉

---

### Option B: AWS CodeBuild Console Integration
1. Push repo to AWS CodeCommit or GitHub.
2. Create an AWS CodeBuild Project pointing to `amazon-q-ci-demo/buildspec.yml`.
3. Run the build ➔ CodeBuild fails on `npm test` with Exit Code 1.
4. Click **"Explain Error with Amazon Q"** inside AWS CodeBuild Console.
5. Amazon Q summarizes the error and provides the fix!

---

## 🛠️ How to Fix the Code Manually (If Testing Without AI)

To fix the bug manually, update line 12 of [`src/discount.ts`](file:///Users/yashhedaoo/Desktop/Novetum/evbr/amazon-q-ci-demo/src/discount.ts):

```typescript
// Replace:
return price - 10;

// With:
return price - (price * discountPercent / 100);
```

Then run `npm test` again to see all tests **PASS (Exit 0)**! 🟢
