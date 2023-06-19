// XỬ LÝ SỐ
//Ex 1
function the_tich_hinh_cau(r) {
    const result = 4 / 3 * Math.PI * Math.pow(r, 3)
    console.log(result)
}


//Ex 2
function tong_cac_so_nam_giua(num_1, num_2) {
    let total = 0
    let arr = []
    if (num_1 < num_2) {
        for (let i = num_1 + 1; i < num_2; i++) {
            arr.push(i)
        }
        for (const item of arr) {
            total += item
        }
        console.log(total)
    }
    if (num_1 > num_2) {
        for (i = num_2 + 1; i < num_1; i++) {
            arr.push(i)
        }
        for (const item of arr) {
            total += item
        }
        console.log(total)
    }
}


//bai 3
function tong_cac_uoc_so(number) {
    let arr = []
    let total = 0
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            arr.push(i)
        }
    }

    for (const numb of arr) {
        total += numb
    }
    console.log(total)
}



//bai 4
function kiem_tra_snt(number) {
    let test
    if (number <= 1) return false
    else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                test = false
                break
            }
            else {
                test = true
            }
        }
    }
    console.log(test)
}



//bai 5
function isNT(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
        // else{
        //     return true
        // }
    }
    return true
}

function tong_cac_so_nguyen_to(number) {
    let sum = 0
    for (let index = 2; index <= number; index++) {
        if (isNT(index)) sum += index

    }
    console.log(sum)
}



/*XỬ LÝ CHUỖI*/
//bai 1
let str = 'HELLO World'
let toLower = str.toLowerCase()
let arrChars = toLower.split('')
let newArr = []
newArr.push(arrChars[0].toUpperCase())
for (let i = 1; i < arrChars.length; i++) {

    if (arrChars[i - 1] === ' ') {
        newArr.push(arrChars[i].toUpperCase())
    }
    else {
        newArr.push(arrChars[i])
    }

}
newArr.join('')


//bai 2
function thay_doi_gach_ngang() {
    let str = 'HELLO World'
    let toLower = str.toLowerCase()
    let arrChars = toLower.split('')
    let newArr_2 = []
    for (let i = 0; i < arrChars.length; i++) {
        if (arrChars[i] === ' ') {
            arrChars[i] = '-'
            newArr_2.push(arrChars[i])
        }
        else {
            newArr_2.push(arrChars[i])
        }
    }
    const result = newArr_2.join('')
}





//bai 3
//bai 4




/*XỬ LÝ MẢNG*/
//bai 1
function loai_gia_tri_sai() {
    let arr_bai_1 = [1, 2, 3, undefined, null, '', false]
    let arr_result = arr_bai_1.filter(function (x) {

        if (!!x === true) return true
        return false
    })
}


//bai 2
function tim_chuoi_dai_nhat() {
    let arr = ['aaa', 'bb', 'cc', 'd', '123']
    let max_length = 0
    let result = []
    for (const item of arr) {
        if (item.length > max_length) {
            max_length = item.length
        }

    }
    for (const item of arr) {
        if (item.length === max_length) {
            result.push(item)
        }
    }
    console.log(result)
}
tim_chuoi_dai_nhat()

//bai 3


/*XỬ LÝ OBJECT*/
//bai 1
function tuoi_trung_binh(arr) {

    let sum = 0
    for (const item of arr) {
        sum += item.age

    }
    const result = sum / arr.length
}

//bai 2
function sap_xep_ten_theo_tuoi(arr) {
    const result = arr.sort(function (a, b) {



        if (a.age < b.age) return 1
        else return -1


    })
    console.log(result)
}


/*TONG HOP*/
//bai 1
function thoi_gian(time, x) {

}
