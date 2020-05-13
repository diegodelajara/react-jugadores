import { createStore } from 'redux'

const initialState = {
  jugadores: [{
    "id": 1,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJZSURBVDjLhZJLSFRxFMZ/995xXpYzaRn0AsloEUlQLSwqS5ShhGjTwtpZ0Toogly0iB4uWrWIVkLgvsVEi4wKsUULIwQxLGyU8TE6vmbm3v+9/0cLnXA06ducA+c7P74DxzLGUKHB3sPALZQ6h5HHkBKM/Ib2PyH8V3Q8GF1vtyoAg713UOoRsWSMSBQsB4wCtwD+EsxlXEzQzZVnzysBg71hjHlDtDpFVQSWcuAug6XAF6B9cCIQr4FCHhYm3iHEZW689m0AlOohVp0CIDeu8BZa8d04bXctLnVbiGKchalWJocVSkF4ewpRfLKa4OPLo6CHiO90WJ5QlLyDWHIe6d/HBBfWEnxAeE9Rfh2B+El9o0NmSKGDphDK7yKadCjOgldqRwuJkd+JJRso5MGxIVTTTDHfiRBnUH47s2P91O13mB7pslHe6t2FOQjcLwSl24RriuR+9bE000I+28L0jz7iu4rI0nWUO8jitCS6DdxSKoRwG8BAUAJfiJE9bTlL6/HF2vMdWutOpRRaa8JefkbUttW3DD0WBH4BnCTa3xtCuiAFuEVQXqhQtePqseMnT7NZu/v73zfheTaOsbA0WMYJUVzJMDXaiFdwkZ4h8E4A9LydrNi+d3EftrdyCktaGLPM768JIBPi2otD641iYCBS7s8eqQdgfN4HwLUicR4OS+BA2RPamFMp9bcfm/UqZlLKTXdtApRNN5urgVVY+d3Xw8uyt0pg2zbZbJZsNott21sC/pVgEUgmEgkSicRG+OJ/AUqpdDqdblNK1Zd/YK0WtNafN/r/AJRSSvzM+v9SAAAAAElFTkSuQmCC",
    "nombre": "Bud"
  }, {
    "id": 2,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF6SURBVDjLxZM7S0NBEIW/fWCnQgyIT0QQDKJBFBRbsRCt/Ae3VRs7wVpIY6WxkqTXxgek8IGIIQRsYjR2SkhAMJoipDAkXNfi6k18YcDCA8vMLDtnds7uCGMMf4Hkj/h/Ag0QDocngVVgrM68O2DJsqx9/bax7vf7fK2tXgCEABBvftU6vuDxMd97cXEZBFwCr8fTTCbzQKViO71J6SYJIdxYa01HRwuA123BgUAphW0b93AtSZVAIaX6qMF7RaU0WvMh4bNVSiKE/EoghEQpiTH62+qJTIzLbIzic4FypYxXdmuwEKFQyPT0dDE0NOCKVxXMiU8SB6Seooz4Run09HGa2iV+fU5Tsd+5QTqdJZ3O/vhmZ7lt5mamsaWNv22K45sdxgcn2NmLgDHm1zW7Mmwi11umFvvJoBlbaDN1/cR8IVdK3ccIHFkABA4tbnNJgFJdBC/mZS2ejNGA5uBqkwahiSbOAIKi3nEeX2wPAPNAI1AENuMb98uviwGZtIAuD3IAAAAASUVORK5CYII=",
    "nombre": "Kailey"
  }, {
    "id": 3,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHjSURBVDjLdZO/alVBEMZ/5+TemxAbFUUskqAoSOJNp4KC4AsoPoGFIHY+gA+jiJXaKIiChbETtBYLUbSMRf6Aydndmfks9kRjvHdhGVh2fvN9uzONJK7fe7Ai6algA3FZCAmQqEF/dnihpK1v7x7dPw0woF64Izg3Xl5s1n9uIe0lQYUFCtjc+sVuEqHBKfpVAXB1vLzQXFtdYPHkGFUCoahVo1Y/fnie+bkBV27c5R8A0pHxyhKvPn5hY2MHRQAQeyokFGJze4cuZfav3gLNYDTg7Pklzpw4ijtIQYRwFx6BhdjtCk+erU0CCPfg+/o2o3ZI13WUlLGo58YMg+GIY4dmCWkCAAgPzAspJW5ePFPlV3VI4uHbz5S5IQfy/yooHngxzFser30iFcNcuAVGw3A0Ilt91IkAsyCXQg5QO0szHEIrogkiguwN2acCoJhjnZGKYx4Ujz5WOA2YD1BMU+BBSYVUvNpxkXuIuWgbsOxTHrG3UHIFWIhsgXtQQpTizNBS5jXZQkhkcywZqQQlAjdRwiml7wU5xWLaL1AvZa8WIjALzIRZ7YVWDW5CiIj48Z8F2pYLl1ZR0+AuzEX0UX035mxIkLq0dhDw5vXL97fr5O3rfwQHJhPx4uuH57f2AL8BfPrVlrs6xwsAAAAASUVORK5CYII=",
    "nombre": "Alfie"
  }, {
    "id": 4,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI1SURBVDjLhZNNSFVREMd/53qfPo3nwq8W1SJaVBKtVAxs56KVIdKiaBct24dBtIkg2tcuLCFavCCiNm2ChAwJQlvlR+LC/OhDffrevfecmWnxUlGe9YfhDDPwmzln5jgzY79G36/dNuO6mB5VVcppIPVCEP1rggRDVCdiakjNbgz1FNr4j+48nzlbEyCqbQAv50YIGthISpR9BS+BoIEggZvn7uK9NBwAqF7rSue1A6tvJQEfhNoAUQCeja0cCBjoaiELQvz1dffnfHNnp3PRTjLIvR3/cl8HxfFlhnoP7wH82EiqHTiLTh3re5xzzoEBGP7NEmpGXAfFDyvgoDi+TBw5MCMXw+kjTWReiAmWoFlDuvQQyeogakakHwPiOsdgT3vNDmYWNwhBifEuMs2QrB5TQysLHEpmKU284MzUKNMTcBaY/rRv1ANvMZQYZ3kNFba+r5Auz6JZmQu5eVq7H9DSdRXJMrwo2/sW5VtZHTkPQGPsNMZHxI0dtPcOAwpmTH5bZvHLO7xPEVXSLEMkxdSTa73ICWD4yRRrpeRVjDczSdDyJCbrmJQ42TgPecU0Aa1guonJJiZlGo9fYvYjFG/1OYCYFDMNqF/FwnoVoilYAEsxLWOyhYYSJiVwbs9bxGRmDsHCLyysVU3Wd2GhhMkGJluYJmi6AJDsACzT36H8s8lv1hfQQmSWAy2AtWGSAhkWVU8XCZIkZpmmu4AkvT/3aLAHox9H4Z/fzwA3lqH2dDv0B6mSc8HU1qcrAAAAAElFTkSuQmCC",
    "nombre": "Felike"
  }, {
    "id": 5,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALvSURBVBgZBcFNaNUFAADw3//jbe/t6d6cc2/kUpeXsEgUsSSiKIzAQxDdvCgdulgagmBXLx4K7BgRWamnOgSDIj3EusRangwlbVvOyba25tvH23v/z36/oCxLcOr7uaO48sxA9Vg7LbTTQloUtrKihXUsI8cqVvAtfo4Biix78eDItmPnX90FADaTotFOisZqJx9NUta7udnlDT/+vXkc52KAIsua/T0BmHuSqwSBOCCK6a2E9vSGojBUiTg0WvNUoz74xeTjT0OAPE376zFZwXoSaKU86dLq0OqwssXSRg4uXn/o2Fjd80OVXTFAnqaD23tCm102O7kwDMSIIsKISCAKKBDka36bXnX7YetxDJAnSbNRi7S2Mu1uKQxLUUiYB6KQSCmKUEYW17o+u/lgDadigCxJ9jb7K1qdUgYlUR4IS+RsPfhFliaeGzkhr+SyJBv74aOX/wsB8qS7d6TRazMpBSFREAjWH0lmflV21lR7e/T19fl3acmbAw+9MzT7CQRlWXrr0k+1OArb3104bvKfVKEE6fSEffv2mZ+f12w2hWFodnbW6Oio8fFxRVHUY8i6ya56vSoMKKAkCAi279bpdCwvL5uYmFCr1Rw4cEC73Vav1786c+ZMO4Q86fbFCnFIFAYEoY17tzSiTcPDw+7fv+/1kxe9e/q8R/PzRkZG7N+///Tly5fL+JVz14dw6eizeyyslWYXc/UqnVZLFEWazabh4WG1Kv19lGVgfX3d3Nyc6elpcZ4kb+DEH3dnrG7FNrqlNC8V2UEjG/MGBxeMjY2ZHP/aVFDa8/RuKysr7ty58yUuxHmaHn77tRdqH598CQDkJde+mcKAhYUFRw4f1Ol0zMzMaDQa8F6tVns/ztN0ZmG55drNuwa21Qz0Vw3UezXqvQYGh1y9etUHH5419fukxcVFy2XTrVufl1mW3bxx40YeHDp5ZQjnsBc7sRM7sAONak+lUq1WHKrds7S05M/yyF84efva2Sn4HxcNUm7wsX3qAAAAAElFTkSuQmCC",
    "nombre": "Gauthier"
  }, {
    "id": 6,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIBSURBVDjLpVPPaxNBGH2zvyGbEAw5aEogByE9RG9ScxESgvUi6D8QxJuYk5dCwXMv3rSHXrwqHlqikFBqXEEkx2KMEppLIGokSjESu/mxG+ebMsvWi4UOPL6dme99730zO2yxWOAsQ8EZhyY/Op3Oa8/zChyYz+eYzWYBptNpgMlkQrFRLpeLxGPUAidfMwzDSSaTIunfEW5T13U4joNer1esVCoN4YArPozH4xgMBjBNMyCFifTd7/cRi8WQyWRIdJ0vN1ir1RLqiUQCo9HohF1qhYiMMaiqKtSj0SgikQjq9Tq63W5RI3WyTr1SkmVZAlI97ISi7/twXRe5XA7tdntdI6XxeIzhcCgOSCbRYVKUc7lGc03TYNu2cEkFClSdJpTAWxKWFUU54UAWSqfTIi+VShGnoJEq9UqgDQIVoOTwDRyyL/ilf8PnnoMj9w8uja+KtkUBSSRSNpsNLBOZ1ruH+1BjP1FazmPp3EW8ae+g+XEbI8U+LkA3IPsL25Xq1YMt3LqyCk/xcPl8CXufXmAll8fzg1fQ+InWa7XaaugvC6LED/M7dGbjxvJdUfBBcQsvW5tYsOrxn/i/ka8sHd2+ed2aw8da6Sk2du/AUk082666p3pM/sJ/1PzwHgZ/OqRsMA3v9t/S1hN22ue8cv/CBg/3OKIcvzk2m4+/rv0F4ux6ZTGbxgwAAAAASUVORK5CYII=",
    "nombre": "Almeda"
  }, {
    "id": 7,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALBSURBVDjLnZPfT1JhHMa56h9o66KrVqtZrWV60U0Xtf6DtjY3a6u7wi1TWIYusQKhBDIWwiY0S2IKOtCFS5DfsaGSTVZrhCAsROX3DzlgJE/vOY3WqivP9pyzc/Y+n+/7Pt/vYanVaplKpWoDwNqPWEqlskkul9ulUumZfQHo29DQEHdwcNA/MDBwaF8AgUBwgM/nL/B4PDuHwzlIf/P5fCKPx1N3OBx1i8VSNZvNDpPJdOG/AFpOp7Oju7t7SyaThVwul5eYKXKBVs7pwPqMCZOTk1WtVsv7BxAIBOZXVlZ+LC0tVb1eL1KpFEqlErYyRYTnXYi0NjNKWi3QaDR1Evqr34DV1VVJLBZjKvXP8RhjsVjEZrqAGxN1XHsDLOsUiJpvIZuIMOtsNhskEomIAZCXMm3K5/MMoKFcLoeNZB7RjW1EPV3IhAxIBDQMnF4rFAr3SOhXWCScOg3429xQZFmN1BctajtrCExfxXb0A7PLYDCI3t7eNZbRaNyjqQ1DA5DJZGB/N4HPxjZUU29RTciQDZthHW1HeaeESqUCLpcLll6vLyUSCWZbtLFQKCCdTmNx0QffdBfSwSlUvz2CW9yK75kpfHx5GVaDlDlKZ2cnWDqdzkonTxtpAG0eGRmJPxfcptZtfdhNvga1dhNu0TlUYj3IR+bgGL60w7nbkWWz2c9Y4+Pj92dnZ0F3ggbQZJVSUSKV/DkSXCXKRflr2y+FrpOjDCPmksP7tKWf6cLY2NgR0teS3+9HPB5HuVyG/sWdeswtw+6WkqleDrWTI7QwTyrCBrU5A/fjM9uuh6dPMcOgUChGyZiCDBPIUME9fLFOpcPYzdpQTZIMkoY/NI1a6RPiPi3sfScMDID8jYfJYITFYnGN9LfmenK+9l7UTHmEZylSiSKVKCf/JOV40EQRE2XjHadsPceohXtHPT8Bse8J0M1mZB4AAAAASUVORK5CYII=",
    "nombre": "Vita"
  }, {
    "id": 8,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK/SURBVDjLY/j//z8DJRiFozbrLk/aqkc76/a8eDft2Ou/Ew69+lm/8/n7pMUPTsuXXlAgaAAIK/fe9Kg7/ubmsaff/h99/O2/48y7q+Tyz2vKZJ5hJGiAUucNRv0JNycuuvLho/WU24tytz67aNl5fZFM8mlhoryg0HAlcePNz7+06670y2aftaja8fy224SbW6SzL1lrNt+aY95776BJ593dJq13dpu13jqoWXptGUJz1WXVkp0vrs48/e6NTNoZM+n4kzpTDr5+7T/l9gHpzAvOyhU3J/vMe/w5e+OL/5lrXvzXKb2xTjz2QhncAKOWqzM3X//0Z97Jdx8mHHj1YsbB128P3Pz0P3bW3TNiXgfk9BturQ+Y9+ifU+/du4nLnvyXiD7fLBZ+lo0BGEAswACKXXLm3We/aXf2SoYejZQIPBws7ncwb+qeF29TZt+9LJlwNiNmydP/tm13LwNtdY+Y+/i/TNT5XnAYAANIL3vN40uTDrx6JRF0xBDmIlHPvepJM+5czJh174Hb5Pvv3SbceykWdd4aaGtQ5MyH/1UTLywDG9Cx8/n3aQdf/W/e+uxL8ozb20CCIu57jIN7bpxcdujN/+hJ9/4nLnnyXyzibC1YLuS0d/jU+/+1ky9swZoOkDHQuTHR8x//T1705H/MnIf/ffvu/Q+ffO9/ytyH/7XiLmwR9DoijFtz9Hkz6/qbl716736Tizo/XSTgZIGw34kc9ajz65JnPvivF3/+oIDbYQ2cBmhmX1qTMO/Rf7Hgk83C/ie4YOKCnkeCXSpvfNCLPn+A3+WgEoZGYCAZi4aeKXZvu/PBo+3OV6CtwUI+x1nBmj2OKAJtbXCrvPbVNufSYz6nA/EYBrh33v3k23f3v2/Pnf8+HXf+G6VdPAa0lRMkZ5Zy8aJXzY1/QPzfq/rGf/fyaz8ZKM3OABiskbcwY1E6AAAAAElFTkSuQmCC",
    "nombre": "Joanie"
  }, {
    "id": 9,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJhSURBVDjLY/j//z8DPnzu3DmhkydPZh45cmTd/v37i3fu3Jm7efPmorVr1wqB5PFqPnv2rPCJEycuHz58OH7Pnj0pO3bsCN+0aVP8mjVrFi1duvTO/Pnz1XBqPnPmDM/x48dfHzt2zAVoSNeTJ096Hz16tPXp06exGzZsCJw7d+6M6dOnF2DVfPr0aSagxomHDh2qAzq/F6hp1uPHjzc9f/68EmjIbiA7C2i7V39//yasBhw9elQOqPnAunXrKm/dulUE1LAbaEgbyAVAl/Q8fPhwG9BbDu3t7SewGrBm636v9EkHXq9atSrowYMHa16+fJkLshmIpwP5m4CG1AIDt7yhoWEHVgMWr9sZ7NO098eyZctKgYphNrcDNYOc33H37t11nZ2d2ZWVlXVYDZi0aIu5c9WOn4sXL7bZu3cvKPCm379/f/OzZ88KgZq3b9u2TbuiouJWUVGRFFYDolo2K9uVbPk9Z86c88CQdl+9enXPrl274oFh0jdt2jSf8vLy14WFhbZY00Fu20Ip66LNZ/JmXfxvl7/6tU328mcW6UueGCYtuumaPuVWaWnpzIKCAg+YehTNXb0TWhrben44FK56H9974r9z3uKspPLJtSml3XOj8zpb/dI6vPLz83WQ9cAZ7V29LUC//T948OD/grK6fzbp8ychKywuLubIy8tjQncxmGhp72rZsmXL//fv3//fuHHj/6y8khOZmZmchPIJ2IDW1lbJ7u7u/x8+fPgPTKL/07MLT6SlpRGlGe6CnOLaFcDQ/p+SkXciJSWFaM0oYZCclumbmJjITopmEAYAfvG+1+IMmV0AAAAASUVORK5CYII=",
    "nombre": "Andrei"
  }, {
    "id": 10,
    "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKASURBVDjLjZJfaFJRHMf3sOhlSG8RvfbQS0G9RNBLPRUEPfQQPQQrVkH1VC/BegkEL1O7ouhwORS1beI2///Z9TKk2EMEM3QqTkQKdU5S58VhE9q33zmkrRhjB36ce889n+/5/r73jAAYOaoikYgqGAxKfr9fWFpaGv3/+3HghM/n6y4uLioej0eYm5sbPZZAOBxWBQIBBu/W63V0u10QvOdyuQSHw3HySIEBvLy8vFur1UDPoBagKArsdvsvm80WslqtJw4VCIVCKtosD2AGzs/Pg9pBu93mTghWLBaLYDKZRg+FKazdarUKss9sgxxhvViFGMnC/+UbzGbzvtFoTIqieGoIU1gqAmQKi8PkAG63GySKZrMJ80oeE+8/45VrHd8rNRCs6HS6a4fC5AAUFu+90WggmUziR7OFSU8Kno95BOVP0Gq1fUEQbnABOk32er397e1tkAicTifvncEkjtXVVZTLZWQLJXwIyAzeI/jyMESCpYWFhf1KpYJisQhJkjjMHESjUZRKJbgiVry0PMCTd3dwX329e+v1xTdDAUpZSafT2NnZwebmJgqFAnfAks/lcrD5DHjrfYjwhhlfaxLExDPcEy/gyvMzOi5AYW2tra0hFouh1Wohn89zkWw2i1QqhXHhJgIZAwI5I9jQyY8hyk+ZQI8L0M06PTs7208kEvzXsdQ7nQ4ymQxkWcbtyUuIbthwcATTZibw9w7MzMyMTU9PN1jP7BeyvuPxOCis3tUXZ39qpUfQSOMc1qyM/+tgUHSzxgwGwxbrnwWo0Wh6arX6HG1U39Wdh16a4Cezmb0PMzhYer1+bGpqaotghcGDddosUCnM9p9ZYOu/ASUg4G4xOdG6AAAAAElFTkSuQmCC",
    "nombre": "Melvyn"
  }],
  titulares: [],
  suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
  switch (action.type) {
    case 'AGREGAR_TITULAR':
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
      }
      break

    case 'AGREGAR_SUPLENTE':
      return {
        ...state,
        suplentes: state.suplentes.concat(action.suplente),
        jugadores: state.jugadores.filter(j => j.id !== action.suplente.id)
      }
  
    default:
      break;
  }
  return state
}

export default createStore(reducerEntrenador)