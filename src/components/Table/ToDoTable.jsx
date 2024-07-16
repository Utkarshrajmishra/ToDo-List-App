import CustomButton from "../Button/CustomButton";
const ToDoTable=()=>{
    return (
      <>
        <div class="relative overflow-x-auto rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-zinc-300">
            <thead class="text-xs text-zinc-400 uppercase bg-neutral-800 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Task
                </th>
                <th scope="col" class="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-500">
                <th
                  scope="row"
                  class="px-6 py-4 font-sm whitespace-nowrap text-white"
                >
                  Feeding the dog
                </th>
                <td class="px-6 py-4 text-sm">02/20/2024</td>

                <td class="px-6 py-4 text-sm text-blue-500 cursor-pointer flex gap-2">
                    <CustomButton variant="delete"/>
                    <CustomButton variant="edit"/>
                    <CustomButton variant="toggle"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default ToDoTable